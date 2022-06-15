import React ,{ Component } from "react";
import Mp from "../component/mahasiswaPage";

class mahasiswa extends Component{
            state = {
                listMahasiswa : [],
                insertMahasiswa : {
                    id:"",
                    nama:"",
                    hp:"",
                    angkatan:"",
                    status:"",
                    alamat:""
                }
            }
            ambilDataDariServerAPI = () => {
                fetch(`http://localhost:3001/mahasiswa?_sort=id&_order=desc`)
                    .then(response => response.json())
                    .then(jsonHasilAmbilDariAPI =>{
                        this.setState({
                            listMahasiswa:jsonHasilAmbilDariAPI
                        })
                    })
            }
            componentDidMount(){
                fetch('http://localhost:3001/mahasiswa')
                    .then(response => response.json())
                    .then(jsonHasilAmbilDariAPI => {
                        this.setState({
                            listMahasiswa: jsonHasilAmbilDariAPI
                        })
                    })
            }

            handleHapusMahasiswa = (data) => {
                fetch(`http://localhost:3001/mahasiswa/${data}`,{method: 'DELETE'})
                    .then(res => {
                        this.componentDidMount()
                    })
            }
            handleTambahMahasiswa = (event) =>{
                let formInsertaMahasiswa = {...this.state.insertMahasiswa};
                // let timestamp = new Date().getTime();
                // formInsertaArtikel['id'] = timestamp;
                formInsertaMahasiswa[event.target.name] = event.target.value;
                this.setState({
                    insertMahasiswa:formInsertaMahasiswa
                });
            }
            handleTombolSimpan=()=>{
                fetch('http://localhost:3001/mahasiswa',{
                    method:'post',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertMahasiswa)
                })
                .then((Response) =>{
                    this.ambilDataDariServerAPI();
                })
            }

            render(){
                return (
                    <div>
                        <div className="container mb-5">
                            <h2 className="text-center">FORM PENGISIAN DATA MAHASISWA</h2>
                            <div className="form-group row">
                                <label htmlFor="id" className="col-sm-2 col-form-label">NIM</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="id" name="id" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                <div className="col-sm-10">
                                    <select class="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                        <option>Pilih Status</option>
                                        <option value={"Aktif"}>Aktif</option>
                                        <option value={"Lulus"}>Lulus</option>
                                        <option value={"Drop Out"}>Drop Out</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                        </div>
                        <hr />
                        <h3 className="text-center">DAFTAR MAHASISWA</h3>
                        <div class="row container-fluid text-center">
                            <div className="col-1 border border-dark bg-warning"><b>NIM</b></div>
                            <div className="col-2 border border-dark bg-warning"><b>NAMA</b></div>
                            <div className="col-1 border border-dark bg-warning"><b>NO HP</b></div>
                            <div className="col-5 border border-dark bg-warning"><b>ALAMAT</b></div>
                            <div className="col-1 border border-dark bg-warning"><b>ANGKATAN</b></div>
                            <div className="col-1 border border-dark bg-warning"><b>STATUS</b></div>
                            <div className="col-1 border border-dark bg-warning"><b>AKSI</b></div>
                        </div>
                        {
                            this.state.listMahasiswa.map(mahasiswa => {
                                return <Mp key={mahasiswa.id} NIM={mahasiswa.id} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa}/>
                            })
                        }
                    </div>
                )
            }
            
                           
}
export default mahasiswa;