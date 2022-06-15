import React from "react";

const Post = (props) => {
    return (
        <div className="mt-2">
            <div className="artikel">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="gambar tumnail artikel" />
                </div>
                <div className="konten-artikel">
                    <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikle">{props.isi}</p>
                    {/* button untuk menghapus data */}
                    <button className="btn btn-sm btn-danger"
                        onClick={() => {if (window.confirm('Apakah anda yakin menghapus artikel ini? ')) props.hapusArtikel(props.idArtikel)}} >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Post;