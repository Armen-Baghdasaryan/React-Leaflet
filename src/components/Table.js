import { Table } from 'antd';
import { useState } from 'react';
// import useSelection from 'antd/lib/table/hooks/useSelection';
import { useDispatch } from 'react-redux';
import { adresses } from '../dataBase/adresses';
import { createPoints } from '../redux/reducers/adressesSlice';
import { ASelect } from './Select';

export const ATable = () => {
  const dispatch = useDispatch()
  // const pointsFrom = useSelection(store => store.points.pointsFrom)
  // const pointsTo = useSelection(store => store.points.pointsTo)

  const columns = [
    {
      title: 'Orders №',
      dataIndex: 'num',
      key: 'num',
      width: '40%',
    },
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'num',
      width: '60%',
    },
  ];

  const [selectedAdress, setSelectedAdress] = useState({})

  return (
    <div className='tableContainer'>
      <Table
        columns={columns}
        dataSource={adresses}
        pagination={false}
        
        rowClassName={(record) =>
          record.key === selectedAdress.key ? "activeRow" : ""
        }

        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedAdress(record)
              dispatch(createPoints(record))
            },
          };
        }}
        expandedRowRender={(record) => (
          <ASelect record={record} />
        )}
      />
    </div>
  )
}