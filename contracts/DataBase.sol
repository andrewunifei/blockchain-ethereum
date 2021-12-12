pragma solidity >=0.8.0;
// SPDX-License-Identifier: MIT

contract DataBase {
    struct Record{
        string tableName;
        string key;
        string value;
        uint size;
    }

    mapping(address => mapping(string => Record[])) tables;

    function createTable(
        string memory _tableName,
        uint _tableSize,
        string[] memory _attrNames,
        string[] memory _records
    ) public{
        for(uint i = 0; i < _tableSize; i++){
            Record memory r = Record(
                _tableName,
                _attrNames[i],
                _records[i],
                _tableSize
            );

            tables[msg.sender][_tableName].push(r);
        }
    }

    function tableSize(string memory _tableName) public view returns (uint){
        return tables[msg.sender][_tableName][0].size;
    }

    function retrieveRecord(string memory _tableName, uint index) public view returns (string memory key, string memory value){
        key = tables[msg.sender][_tableName][index].key;
        value = tables[msg.sender][_tableName][index].value;
    }
}
