import { Empty, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomLayout from '../../Component/Layout/Index';
import { getUnitUTRequest } from '../../store/Beranda/action';

const Contoh = () => {
    const dispatch = useDispatch();
    const { reducerUnitUT } = useSelector((state) => state.BerandaReducers);
    // console.log("cek", reducerUnitUT.data)
    useEffect(() => {
        document.title = 'Contoh';
        dispatch(getUnitUTRequest());

        return () => {
            document.title = 'React App';
        };
    }, []);

    // console.log('reducerUnitUT', reducerUnitUT);

    return (
        <>
            <CustomLayout>
                <div>
                    <h5 className='text-center'>Contoh</h5>
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

export default Contoh;
