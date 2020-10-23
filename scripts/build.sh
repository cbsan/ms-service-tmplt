#!/bin/ash

PROJECT_NAME="Sample MS Service Build <<< Insert Name Application"

_clear()
{
  _echo "Cleaning old build!!!" 31
  rm -rf build
}

_echo()
{
  local message="${1}"
  local color="${2}"
  local decoration="${3}"

  if [ "${color}" == "" ]; then
     color=0
  fi

  if [ "${decoration}" == "" ]; then
      decoration="normal"
  fi

  echo -e "\033[${color}m${message}\033[0m"
}

_exit()
{

  _echo "Building completed!" 32
  exit 0
}

_build()
{
  _echo "Building project ${PROJECT_NAME}" 32
  _clear

  _echo "Initializing build..." 36
  yarn tsc
}

_build
_exit
