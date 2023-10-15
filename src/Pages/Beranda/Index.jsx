import { Empty, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomLayout from '../../Component/Layout/Index';
import { getUnitUTRequest } from '../../store/Beranda/action';

const Beranda = () => {
  const dispatch = useDispatch();

  const { reducerUnitUT } = useSelector((state) => state.BerandaReducers);

  useEffect(() => {
    document.title = 'Beranda';
    dispatch(getUnitUTRequest());

    return () => {
      document.title = 'React App';
    };
  }, []);

  console.log('reducerUnitUT', reducerUnitUT);

  return (
    <>
      <CustomLayout>
        <div>
          <h5 className='text-center'>beranda</h5>
          {reducerUnitUT.isLoading ? (
            <Spin />
          ) : reducerUnitUT.isLoading === false &&
            reducerUnitUT.data.length > 0 ? (
            <div>
              {reducerUnitUT.data.map((item, index) => (
                <div key={index}>
                  <p>{item.nama_unit}</p>
                </div>
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </CustomLayout>
    </>
  );
};

export default Beranda;
