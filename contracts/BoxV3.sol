// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BoxV2.sol";

contract BoxV3 is BoxV2 {
    function decrement() public {
        store(retrieve() - 1);
    }
}