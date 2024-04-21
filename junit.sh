#! /bin/bash -e

# Compiles and runs JUnit tests on a specified directory of Java files.

# To download JUnit:
# npm run junit download
if [ "$1" == "download" ]; then
  echo "Downloading JUnit"
  mkdir -p lib
  wget -P lib https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/1.10.1/junit-platform-console-standalone-1.10.1.jar
  exit 0
fi

# To run against the current directory:
# npm run junit $(pwd)

# Delete any pre-existing compiled classes
echo "Deleting $(pwd)/target"
rm -rf target

# Compile Java classes with JUnit 5
test_helpers=$(find $1/../test_helpers -name "*.java")
echo "Compiling..."
javac -d target -cp lib/junit-platform-console-standalone-1.10.1.jar $1/*.java $test_helpers

# Run the tests
java -jar lib/junit-platform-console-standalone-1.10.1.jar execute -cp target --scan-classpath
