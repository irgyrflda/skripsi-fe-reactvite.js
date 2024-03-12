import React, { useState } from 'react';
import CustomLayout from '../../Component/Layout/Index';
import './beranda.css';
import { Button, Col, InputNumber, Drawer, Form, Row, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { postBeras } from '../../store/Beranda/action';
import { useNavigate } from 'react-router-dom';
import gambarBeras from '../../assets/beras-keren-dua.png'
import { BaseUrlFmcdm } from '../../Api/BaseUrl';
import { DownloadJurnalKlasisikasiBeras } from '../../Api/Endpoint/Beranda';

const Beranda = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const { reducerFmcdm } = useSelector((state) => state.BerandaReducers);
  // console.log('cek', reducerFmcdm)
  // const [form] = useForm()
  const [open, setOpen] = useState(false);
  // const [post, setPost] = useState({
  // banyakBeras: ''
  // })
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleInput = (values) => {
    const payload = {
      gram: values.banyakBeras,
      derajat_sosoh: values.derajatSosoh,
      kadar_air: values.kadarAir,
      beras_kepala: values.berasKepala,
      butir_patah: values.butirPatah,
      butir_menir: values.butirMenir,
      butir_merah: values.butirMerah,
      butir_kuning: values.butirKuning,
      butir_kapur: values.butirkapur,
      benda_asing: values.bendaAsing,
      butir_gabah: values.butirGabah
    }

    console.log("payload => ", payload);

    dispatch(postBeras(payload)).then((respons) => {
      console.log('cek cek', respons)
      if (respons.data.status === 'success') {
        Navigate('/Hasil')
      }
    })
  }

  return (
    <>
      <CustomLayout>
        <div>
          <aside className="relative overflow-hidden text-black rounded-b-lg sm:py-28 bg-gradient-to-r from-sky-500 to-indigo-300 w-full h-screen" id='home' >
            <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
              <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto text-white">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  Klasifikasi
                  <span className="hidden sm:block text-4xl">
                    & Peramalan Beras
                  </span>
                </h2>

                {/* <div style={{ marginRight: '10px', marginLeft: '10px'}}> */}
                <a className="inline-flex text-white items-center px-20 py-3 mx-10 font-medium bg-violet-500 rounded-lg hover:opacity-75" onClick={showDrawer}>
                  Mulai
                </a>
                <Drawer
                  title="Input Data Karakteristik Beras"
                  width={720}
                  onClose={onClose}
                  open={open}
                  styles={{
                    body: {
                      paddingBottom: 80,
                    },
                  }}
                  extra={
                    <Space>
                      <Button onClick={onClose}>Batal</Button>
                    </Space>
                  }
                >
                  <Form onFinish={handleInput} layout="vertical" hideRequiredMark initialValues={{
                    banyakBeras: 0,
                    bendaAsing: 0,
                    derajatSosoh: 0,
                    kadarAir: 0,
                    berasKepala: 0,
                    butirPatah: 0,
                    butirMenir: 0,
                    butirMerah: 0,
                    butirKuning: 0,
                    butirkapur: 0,
                    butirGabah: 0,
                  }}>
                    <Row gutter={16} className='grid justify-items-center ...'>
                      <Col span={12}>
                        <Form.Item
                          name="banyakBeras"
                          label="Total Banyak Beras"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Beras Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="Gram" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="derajatSosoh"
                          label="Total Derajat Sosoh"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Derajat Sosoh Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="kadarAir"
                          label="Total Kadar Air"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Kadar Air Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="berasKepala"
                          label="Total Beras Kepala"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Beras Kepala Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="butirPatah"
                          label="Total Butir Patah"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Patah Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="butirMenir"
                          label="Total Butir Menir"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Menir Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="butirMerah"
                          label="Total Butir Merah"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Merah Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="butirKuning"
                          label="Total Butir Kuning"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Kuning Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="butirkapur"
                          label="Total Butir Kapur"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Kapur Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="bendaAsing"
                          label="Total Benda Asing"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Benda Asing Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="butirGabah"
                          label="Total Butir Gabah"
                          rules={[
                            {
                              required: true,
                              message: 'Banyak Butir Gabah Harus diisi',
                            },
                          ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      <Button htmlType='submit' className='text-white bg-blue-500'>
                        Kirim
                      </Button>
                    </div>
                  </Form>
                </Drawer>
                {/* </div> */}
              </div>
            </div>

            <div className="absolute inset-0 w-full sm:my-28 sm:pt-10 pt-10 h-full px-28">
              <img className="w-96" src={gambarBeras} />
            </div>
          </aside>

          <div className="grid  place-items-center sm:mt-20 w-full" id='about'>
            {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" /> */}
          </div>
          <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Tentang Kami</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">

            <div className="border border-2 shadow-lg rounded-lg py-20 bg-gradient-to-r from-cyan-500 to-blue-400  text-white">
              <p className="font-bold m-5 text-xl">Data Set Klasifikasi Beras</p>
              <Button href={`${BaseUrlFmcdm}${DownloadJurnalKlasisikasiBeras.downloadJurnalKlasisikasiBeras}`}>Klik saya!</Button>
            </div>
            <div className="border border-2 shadow-lg rounded-lg py-20 bg-gradient-to-r from-violet-500 to-fuchsia-400  text-white">
              <p className="font-bold m-5 text-xl">Data Set Harga Rata-rata Beras</p>
              <Button href="https://www.bps.go.id/id/statistics-table/2/NTAwIzI=/rata-rata-harga-beras-bulanan-di-tingkat-penggilingan-menurut-kualitas--rupiah-kg-.html" target="_blank">Klik saya!</Button>
            </div>

          </div>
        </div>
      </CustomLayout >
    </>
  );
};

export default Beranda;
