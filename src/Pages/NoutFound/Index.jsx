import { Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='flex justify-center'>
      <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{
          height: 180,
        }}
        description={null}
      >
        <button
          type='primary'
          className='bg-blue-500 rounded-md p-3 text-white hover:bg-blue-700 duration-75 transition-all transform hover:scale-110'
          onClick={() => {
            goBack();
          }}
        >
          Go Back
        </button>
      </Empty>
    </div>
  );
};

export default NotFound;
