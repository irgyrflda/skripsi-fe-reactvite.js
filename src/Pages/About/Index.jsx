import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomLayout from '../../Component/Layout/Index';
import Marquee from 'react-fast-marquee';
import { Alert, } from 'antd';
import NotFound from '../NoutFound/Index';
import ReactApexChart from 'react-apexcharts';

const About = () => {
  const { reducerFmcdm } = useSelector((state) => state.BerandaReducers);
  const data = reducerFmcdm.data.map((i) => {
    return i.bulan_tahun
  })
  // console.log('data', data)
  const [state, setState] = useState({
    series: [{
      name: 'harga rata rata',
      data: reducerFmcdm.data.map((item) => {
        return item.harga_rr_beras
      })
    }, {
      name: 'peramalan',
      data: reducerFmcdm.data.map((item) => {
        return item.forcaseting
      })
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'text',
        categories: reducerFmcdm.data.map((item) => {
          return item.bulan_tahun
        })
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  })
  const lastArray = reducerFmcdm.data.slice(-1)[0];
  const formatRP =
    (money) => {
      return new Intl.NumberFormat(
        "id-ID",
        {
          style:
            "currency",
          currency:
            "IDR",
          minimumFractionDigits: 0,
        }
      ).format(
        money
      );
    };
  return (
    <CustomLayout>
      <div>
        {
          (reducerFmcdm.data.length === 0) ?
            <>
              <div className='pt-2 h-48 max-h-full md:max-h-screen'>
                <Alert
                  banner
                  message={
                    <Marquee pauseOnHover gradient={false}>
                      Data Tidak Ditemukan Silahkan Kembali ke Menu Beranda lalu Klik Tombol Mulai Untuk Input Data Beras.
                    </Marquee>
                  }
                />
              </div>
              <NotFound />
            </>
            :
            <>
              <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Hasil Penelitian</h1>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-2 lg:mx-2">
                  <div className="py-10 inline-block min-w-full sm:px-10 lg:px-10">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 border-b">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              kategori beras
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              nilai alpha
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-red-600">
                              nilai error
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              hasil peramalan
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {lastArray.kategori_beras}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {lastArray.nilai_alpha}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {lastArray.nilai_error}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {formatRP(lastArray.forcaseting)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Keterangan</h1>
                <p className='text-justify p-20'>Berdasarkan hasil pengolahan dan analisis terhadap data harga rata rata beras di tingkat penggilingan berdasarkan kualitas {lastArray.kategori_beras}, dapat diketahui bahwa data tersebut merupakan data deret waktu yang mengandung unsur pola <i> horizontal</i>. Metode peramalan yang digunakan adalah <i> Single Exponential Smoothing</i> dengan pengukuran kesalahan dalam peramalan menggunakan <i> MAPE</i> dengan mengoptimalkan parameter menggunakan <i> Grid Search</i> untuk mendapatkan nilai error terkecil pada hasil peramalan. Peramalan ini menggunakan nilai parameter <i> alpha α</i> = <b> {lastArray.nilai_alpha}</b> yang menghasilkan nilai error
                  <i> MAPE</i> = <b> {lastArray.nilai_error}</b>. Berdasarkan hasil analisis dapat disimpulkan bahwa peramalan menggunakan metode <i> Single Exponential Smoothing</i> jika melihat tabel range nilai <i> MAPE</i> berada dibawah 10% menandakan bahwa hasil peramalan pada harga rata rata beras di tingkat penggilingan masuk ke dalam kategori sangat baik untuk digunakan sebagai pemodelan untuk peramalan di periode selanjutnya. Hasil peramalan yang diperoleh menggunakan <i> Single Exponential Smoothing</i> menunjukkan adanya kesamaan dari hasil peramalan harga rata rata beras di tingkat penggilingan di periode yang akan datang adalah <b> {formatRP(lastArray.forcaseting)}</b></p>
              </div>
              <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Grafik Peramalan</h1>
              <div className='py-10 inline-block min-w-full sm:px-10 lg:px-10'>
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="area"
                  height={350}
                />
              </div>
            </>
        }
      </div>
    </CustomLayout>
  );
};

export default About;
