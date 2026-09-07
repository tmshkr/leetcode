#!/usr/bin/env bash

# npm preserves the directory it was invoked from in INIT_CWD.
root=$(cd "$(dirname "$0")" && pwd)
solution_dir=${INIT_CWD:-$PWD}
cd "$solution_dir" || exit 1
shopt -s nullglob

status=0
suites=0
passed=0
suite_names=()
suite_results=()
suite_exit_codes=()
run_suite() {
  local language=$1
  shift
  suites=$((suites + 1))
  suite_names+=("$language")
  printf '\nRunning %s tests\n' "$language"
  if ("$@"); then
    suite_results+=(PASS)
    suite_exit_codes+=(0)
    passed=$((passed + 1))
    printf '%s: PASS\n' "$language"
  else
    suite_exit_codes+=("$?")
    suite_results+=(FAIL)
    printf '%s: FAIL\n' "$language"
    status=1
  fi
}

js_tests=(*test.js)
if ((${#js_tests[@]})); then
  for i in "${!js_tests[@]}"; do
    js_tests[$i]="$solution_dir/${js_tests[$i]}"
  done
  run_suite JavaScript "$root/node_modules/.bin/vitest" run --globals --root "$root" "${js_tests[@]}"
fi

py_tests=(*test.py)
if ((${#py_tests[@]})); then
  run_python() {
    local failed=0
    local test_file
    for test_file in "${py_tests[@]}"; do
      python3 "$test_file" || failed=1
    done
    return "$failed"
  }
  run_suite Python run_python
fi

java_tests=(*.test.java)
if ((${#java_tests[@]})); then
  run_java() {
    cd "$root" && bash ./junit.sh "$solution_dir"
  }
  run_suite Java run_java
fi

cpp_tests=(*.test.cpp)
if ((${#cpp_tests[@]})); then
  run_cpp() {
    local build_dir="$solution_dir/build"
    local cmake_options=()
    if [[ -d "$root/build/_deps/googletest-src" ]]; then
      cmake_options+=("-DFETCHCONTENT_SOURCE_DIR_GOOGLETEST=$root/build/_deps/googletest-src")
    fi
    cmake -S "$solution_dir" -B "$build_dir" \
      -DFETCHCONTENT_BASE_DIR="$build_dir/_deps" "${cmake_options[@]}" &&
      cmake --build "$build_dir" &&
      ctest --test-dir "$build_dir" --output-on-failure
  }
  run_suite C++ run_cpp
fi

if [[ -f go/go.mod ]]; then
  run_suite Go go -C "$solution_dir/go" test -v ./...
fi

php_tests=(*Test.php)
if ((${#php_tests[@]})); then
  run_suite PHP "$root/vendor/bin/phpunit" "$solution_dir"
fi

cs_projects=(csharp/*.csproj)
for project in "${cs_projects[@]}"; do
  run_suite "C# ($project)" dotnet test "$project"
done

printf '\nTest suite summary — %s\n' "${solution_dir##*/}"
printf '%-36s %-8s %s\n' 'Suite' 'Result' 'Exit code'
printf '%s\n' '-------------------------------------------------------'
for i in "${!suite_names[@]}"; do
  printf '%-36s %-8s %s\n' "${suite_names[$i]}" "${suite_results[$i]}" "${suite_exit_codes[$i]}"
done
printf '%s\n' '-------------------------------------------------------'
printf '%d suites: %d passed, %d failed\n' "$suites" "$passed" "$((suites - passed))"

if ((suites == 0)); then
  printf 'No test suites found in %s. Run npm test from a solution directory.\n' "$solution_dir" >&2
  exit 1
fi

exit "$status"
