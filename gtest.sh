#! /bin/bash -e

# Compiles and runs Google Test on a specified directory of C++ files.

build_dir="$(pwd)/build"

# Navigate to the specified directory
cd $1

# Remove the existing build directory
echo "Removing $build_dir"
rm -rf "$build_dir"

# Create a new build directory
echo "Creating $build_dir"
cmake -S . -B "$build_dir"

# Build the project
echo "Building $build_dir"
cmake --build "$build_dir"

# Run the tests
echo "Running $build_dir/test"
cd "$build_dir" && ctest --rerun-failed --output-on-failure
