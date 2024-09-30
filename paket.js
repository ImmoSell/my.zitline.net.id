const Paket = require("../models/paket")


// memuat seluruh data paket
const getPaket = async (req,res) => {
  try {
  const response = await Paket.findAll()
  res.status(200).json({message: "berhasil"})
  }
  catch(err) {
    console.log(`gagal memuat data Paket ${err}`)
    res.status(400).json({message: "error server"})
  }
  // mencari data paket berdasarkan id

  const getPaketById = async (req,res) => {
    try{
    const response = await Paket.findOne()
    where: {
      params: req.params.id
      }

      if (response){
        res.status(200).json(`pencarian data berhasil`)
    }else {
        res.status(400).json(`pencarian data tidak berhasil`)
      }
    }
    catch (err) {
      res.status(400).json(`server error ${err}`)



  const createPaket = async (req,res) => {
    try {
      const create = await Paket.create = req.body

      if(create){
        res.status(201).json({message: "berhasil membuat data paket"})       
      }
      else {
        res.status(400).json({message: "gagal membuat data paket"})
        catch (err) {
          res.status(400).json({message: `terjadi kesalahan server error ${err}`
                               }
                          

      

