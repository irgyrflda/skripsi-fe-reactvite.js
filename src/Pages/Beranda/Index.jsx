import axios from 'axios';
import { useEffect, useState } from 'react';
import Hero from '../../Component/Hero/Index';
import Navbar from '../../Component/Navbar/Index';

const Beranda = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFtech = () => {
    setLoading(true);
    axios.get('https://asset.ut.ac.id/hrd/unit').then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleFtech();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Beranda</h1>
      <button
        onClick={() => {
          handleFtech();
        }}
      >
        klik
      </button>

      {loading ? 'loading' : null}
      {data.length === 0 && loading === false ? 'kosong' : null}

      {data.map((item) => {
        return (
          <div key={item.kode_unit_lama}>
            <p>{item.nama_unit_lama}</p>
          </div>
        );
      })}

      <Hero data={data} />
    </div>
  );
};

export default Beranda;
