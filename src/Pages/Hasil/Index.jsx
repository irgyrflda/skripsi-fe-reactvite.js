import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomLayout from '../../Component/Layout/Index';
import Marquee from 'react-fast-marquee';
import { Alert, Popover } from 'antd';
import NotFound from '../NoutFound/Index';
import ReactApexChart from 'react-apexcharts';

const Hasil = () => {
  const { reducerFmcdm } = useSelector((state) => state.BerandaReducers);
  const [state, setState] = useState({
    series: [{
      name: 'harga rata rata',
      data: reducerFmcdm.data?.data?.map((item) => {
        return item.harga_rr_beras
      })
    }, {
      name: 'peramalan',
      data: reducerFmcdm.data?.data?.map((item) => {
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
        categories: reducerFmcdm.data?.data?.map((item) => {
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
  const lastArray = reducerFmcdm?.data?.data?.slice(-1)[0];
  const ratingDerajatKecocokan = reducerFmcdm.data?.data_dua?.tahap1?.rating_derajat_kecocokan_alternatif
  const nilaiSubsitusi = reducerFmcdm.data?.data_dua?.tahap2?.nilai_hasil_subsitusi
  const seleksiAlternatif = reducerFmcdm.data?.data_dua?.tahap3?.nilai_total_integral_setiap_alternatif
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
          (reducerFmcdm.data?.length === 0) ?
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
              <h2 className="text-center text-2xl sm:text-3xl py-10 font-light">Multi Criteria Decision Making</h2>
              <h2 className="text-left sm:mx-12 text-2xl font-light">Tahap Satu (rating derajat kecocokan)</h2>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-2 lg:mx-2">
                  <div className="py-10 inline-block min-w-full sm:px-10 lg:px-10">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 border-b">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Alternatif
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Derajat Sosoh
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Kadar Air
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Beras Kepala
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Patah
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Menir
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Merah
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Kuning
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Kapur
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Benda Asing
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Butir Gabah
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                return <div key={index}>
                                  <Popover content={`Alternatif ${item.alternatif}`}>
                                    <p className='py-2 text-center'>
                                      {`A ${index + 1}`}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.derajat_sosoh_y}</p>
                                    <p>Q = {item.derajat_sosoh_q}</p>
                                    <p>Z = {item.derajat_sosoh_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai" >
                                    <p className='py-2 text-center'>
                                      {item.derajat_sosoh}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.kadar_air_y}</p>
                                    <p>Q = {item.kadar_air_q}</p>
                                    <p>Z = {item.kadar_air_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.kadar_air}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.beras_kepala_y}</p>
                                    <p>Q = {item.beras_kepala_q}</p>
                                    <p>Z = {item.beras_kepala_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.beras_kepala}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_patah_y}</p>
                                    <p>Q = {item.butir_patah_q}</p>
                                    <p>Z = {item.butir_patah_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_patah}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_menir_y}</p>
                                    <p>Q = {item.butir_menir_q}</p>
                                    <p>Z = {item.butir_menir_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_menir}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_merah_y}</p>
                                    <p>Q = {item.butir_merah_q}</p>
                                    <p>Z = {item.butir_merah_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_merah}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_kuning_y}</p>
                                    <p>Q = {item.butir_kuning_q}</p>
                                    <p>Z = {item.butir_kuning_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_kuning}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_kapur_y}</p>
                                    <p>Q = {item.butir_kapur_q}</p>
                                    <p>Z = {item.butir_kapur_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_kapur}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.benda_asing_y}</p>
                                    <p>Q = {item.benda_asing_q}</p>
                                    <p>Z = {item.benda_asing_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.benda_asing}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {ratingDerajatKecocokan.map((item, index) => {
                                const data = (
                                  <div>
                                    <p>Y = {item.butir_gabah_y}</p>
                                    <p>Q = {item.butir_gabah_q}</p>
                                    <p>Z = {item.butir_gabah_z}</p>
                                  </div>
                                )
                                return <div key={index}>
                                  <Popover content={data} title="Nilai">
                                    <p className='py-2 text-center'>
                                      {item.butir_gabah}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-left sm:mx-12 text-2xl font-light">Tahap Dua (Hasil nilai subsitusi)</h2>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-2 lg:mx-2">
                  <div className="py-10 inline-block min-w-full sm:px-10 lg:px-10">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 border-b">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Alternatif
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Y
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Q
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Z
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {nilaiSubsitusi.map((item, index) => {
                                return <div key={index}>
                                  <Popover content={`Alternatif ${item.alternatif}`}>
                                    <p className='py-2 text-center'>
                                      {`A ${index + 1}`}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {nilaiSubsitusi?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.nilai_y}</p>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {nilaiSubsitusi?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.nilai_q}</p>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {nilaiSubsitusi?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.nilai_z}</p>
                                </div>
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-left sm:mx-12 text-2xl font-light">Tahap Tiga (Seleksi alternatif hasil nilai integral berdasarkan nilai alpha)</h2>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-2 lg:mx-2">
                  <div className="py-10 inline-block min-w-full sm:px-10 lg:px-10">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 border-b">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Alternatif
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              α = 0
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              α = 0.5
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              α = 1
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                              Hasil Seleksi Alternatif
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-200 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {seleksiAlternatif.map((item, index) => {
                                return <div key={index}>
                                  <Popover content={`Alternatif ${item.alternatif}`}>
                                    <p className='py-2 text-center'>
                                      {`A ${index + 1}`}
                                    </p>
                                  </Popover>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {seleksiAlternatif?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.alpha_0}</p>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {seleksiAlternatif?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.alpha_05}</p>
                                </div>
                              })}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {seleksiAlternatif?.map((item, index) => {
                                return <div key={index}>
                                  <p className='py-2 text-right'>{item?.alpha_1}</p>
                                </div>
                              })}
                            </td><td className="text-sm text-green-400 font-extrabold px-6 py-4">
                              <p className='text-center text-base'>{reducerFmcdm.data?.data_dua?.tahap4?.hasil_selection}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-center text-2xl sm:text-3xl py-10 font-light">Singel Exponential Smoothing</h1>
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
                            <th scope="col" className="text-sm font-medium px-6 py-4 text-left text-red-600">
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
                              {lastArray?.kategori_beras}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {lastArray?.nilai_alpha}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {lastArray?.nilai_error}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                              {formatRP(lastArray?.forcaseting)}
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
                <p className='text-justify p-20'>Berdasarkan hasil pengolahan dan analisis terhadap data harga rata rata beras di tingkat penggilingan berdasarkan kualitas {lastArray?.kategori_beras}, dapat diketahui bahwa data tersebut merupakan data deret waktu yang mengandung unsur pola <i> horizontal</i>. Metode peramalan yang digunakan adalah <i> Single Exponential Smoothing</i> dengan pengukuran kesalahan dalam peramalan menggunakan <i> MAPE</i> dengan mengoptimalkan parameter menggunakan <i> Grid Search</i> untuk mendapatkan nilai error terkecil pada hasil peramalan. Peramalan ini menggunakan nilai parameter <i> alpha α</i> = <b> {lastArray?.nilai_alpha}</b> yang menghasilkan nilai error
                  <i> MAPE</i> = <b> {lastArray?.nilai_error}</b>. Berdasarkan hasil analisis dapat disimpulkan bahwa peramalan menggunakan metode <i> Single Exponential Smoothing</i> jika melihat tabel range nilai <i> MAPE</i> berada dibawah 10% menandakan bahwa hasil peramalan pada harga rata rata beras di tingkat penggilingan masuk ke dalam kategori sangat baik untuk digunakan sebagai pemodelan untuk peramalan di periode selanjutnya. Hasil peramalan yang diperoleh menggunakan <i> Single Exponential Smoothing</i> menunjukkan adanya kesamaan dari hasil peramalan harga rata rata beras di tingkat penggilingan di periode yang akan datang adalah <b> {formatRP(lastArray?.forcaseting)}</b></p>
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

export default Hasil;
