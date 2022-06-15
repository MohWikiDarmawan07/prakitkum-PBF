import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
// import API from "../../service";
import firebase from 'firebase/compat/app';
import firebaseConfig from "../../firebase/config";
import 'firebase/compat/database';

class BlogPost extends Component {
    constructor(props) {
        super(props)
        firebase.initializeApp(firebaseConfig); // inisialisasi firebase

        this.state = {          // inisialisasi state dari react statefull component
            listArtikel: []     // variable array yang digunakan untuk menyimpan data API
        }
    }

    ambilDataDariServerAPI = () => {    // fungsi untuk mengambil data dari Realtine Database Firebase
        let ref = firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {  // fungsi untuk mengirim/insert data ke API Realtine Database Firebase
        firebase.database()
            .ref('/')
            .set(this.state);
    }

    componentDidMount() {   // fungsi yang akan dijalankan ketika component telah di mount
        this.ambilDataDariServerAPI() // ambil data dari server API lokal
    }

    // handle delete button
    handleHapusArtikel = (idArtikel) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        const { listArtikel } = this.state; // mengambil data dari state
        const newState = listArtikel.filter(data => { // looping data
            return data.uid !== idArtikel; // jika data tidak sama dengan id yang akan di hapus maka return true, jika sama maka return false
        });
        this.setState({ listArtikel: newState }); // set state dengan data yang telah di filter
    }

    // handle insert button
    handleTombolSimpan = () => { // fungsi yang akan di panggil ketika tombol tambah di klik
        let title = this.refs.judulArtikel.value; // mengambil value dari inputan judul
        let body = this.refs.isiArtikel.value; // mengambil value dari inputan isi
        let uid = this.refs.uid.value; // mengambil value dari inputan uid

        if (uid && title && body) { // jika inputan sudah terisi
            const { listArtikel } = this.state; // mengambil data dari state
            const indeksArtikel = listArtikel.findIndex(data => { // mencari index dari data yang akan di update
                return data.uid === uid; // jika data yang akan di update sama dengan uid yang ada maka return true, jika tidak maka return false
            });
            listArtikel[indeksArtikel].title = title; // mengisi data pada index yang telah dicari dengan judul yang baru
            listArtikel[indeksArtikel].body = body; // mengisi data pada index yang telah dicari dengan isi yang baru
            this.setState({ listArtikel }); // set state dengan data yang telah di update
        } else if (title && body) { // jika inputan judul dan isi sudah terisi
            const uid = new Date().getTime().toString(); // generate uid dari waktu saat ini
            const { listArtikel } = this.state; // mengambil data dari state
            listArtikel.push({ // menambahkan data baru ke dalam array
                uid, // isi dari uid yang baru
                title, // isi dari judul yang baru
                body // isi dari isi yang baru
            });
            this.setState({ listArtikel }); // set state dengan data yang telah di update
        }
        this.refs.judulArtikel.value = ''; // mereset inputan judul
        this.refs.isiArtikel.value = ''; // mereset inputan isi
        this.refs.uid.value = ''; // mereset inputan uid
    }

    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="post-artikel">
                    <div className="form pb-2 border-bottom">
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="title" name="title" ref="judulArtikel" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="body" name="body" rows="3" ref="isiArtikel"></textarea>
                            </div>
                        </div>
                        <input type="hidden" name="uid" ref="uid" />
                        <button type="submit" className="btn btn-primary mt-2" onClick={this.handleTombolSimpan}>Simpan</button>
                    </div>
                    <h2> Daftar Artikel </h2>
                    {
                        this.state.listArtikel.map(artikel => { // looping data dari API
                            return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} hapusArtikel={this.handleHapusArtikel} idArtikel={artikel.uid} />
                        })
                    }
                </div>
            </div>
        );
    }

}
export default BlogPost;