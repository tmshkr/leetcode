#! /bin/bash -e

# Compiles and runs Google Test on a specified directory of C++ files.

# To run against the current directory:
# npm run gtest $(pwd)

# Navigate to the specified directory
cd $1

# Create a new build directory
echo "Creating $1/build"
cmake -S . -B build

# Build the project
echo "Building $1/build"
cmake --build build

# Run the tests
echo "Running $1/build/test"
cd build && ctest

