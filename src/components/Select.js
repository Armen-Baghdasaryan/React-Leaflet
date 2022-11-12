import React from 'react'
import { Select } from 'antd';
import { points } from '../dataBase/points';
import { useDispatch } from 'react-redux';
import { editPointsFrom, editPointsTo } from '../redux/reducers/adressesSlice';

export const ASelect = ({ record }) => {
    const Option = Select.Option
    const dispatch = useDispatch()

    const handlePointsChangeFrom = (value) => {
        dispatch(editPointsFrom(JSON.parse(value)))
    }

    const handlePointsChangeTo = (value) => {
        dispatch(editPointsTo(JSON.parse(value)))
    }

    return (
        <div className='selectContainer'>
            <p style={{ fontSize: "16px" }}>Адрес погрузки:</p>
            <Select defaultValue={record.pointA.name} style={{ width: "50%" }} onChange={handlePointsChangeFrom}>
                {points.map(point => (
                    <Option key={point.id} value={point.point}>{point.name}</Option>
                ))}
            </Select>

            <p style={{ marginTop: "10px", fontSize: "16px" }}>Адрес разгрузки:</p>
            <Select defaultValue={record.pointB.name} style={{ width: "50%" }} onChange={handlePointsChangeTo}>
                {points.map(point => (
                    <Option key={point.id} value={point.point}>{point.name}</Option>
                ))}
            </Select>
        </div>
    )
}
