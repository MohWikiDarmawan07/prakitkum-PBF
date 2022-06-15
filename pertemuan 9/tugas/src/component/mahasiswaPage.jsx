import React  from "react";

const mahasiswaPage = (props) => {
        return(
           <div className="row container-fluid text-center">
                        <div className="col-1 border border-dark p-1">{props.NIM}</div>
                        <div className="col-2 border border-dark p-1">{props.nama}</div>
                        <div className="col-1 border border-dark p-1">{props.hp}</div>
                        <div className="col-5 border border-dark p-1">{props.alamat}</div>
                        <div className="col-1 border border-dark p-1">{props.angkatan}</div>
                        <div className="col-1 border border-dark p-1">{props.status}</div>
                        <div className="col-1 border border-dark p-1"><button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.NIM)}>Hapus</button></div>
           </div>  
        );
}
export default mahasiswaPage;