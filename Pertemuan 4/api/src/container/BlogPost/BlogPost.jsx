import React,{Component} from "react";
import './BlogPost.css';
import Post from "../../components/BlogPost/Post";

class BlogPost extends Component{
state ={  //komponen state dari react untuk statefull component
listArtikel:[]  //variabel array yang digunakan untuk menyimpan data Api

}
componentDidMount(){   //komponen mengecek ketika komponen telah di-mount-img, maka panggil api
    fetch( 'https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(jsonHasilAmbilDariApi => {
    this.setState({
        listArtikel: jsonHasilAmbilDariApi
    })
    })
}
    render() {
        return(
            <div class="post-artikel">
            <p>Daftar Artikel</p>
            {
                this.state.listArtikel.map(artikel => {
                return<Post judul="JTI polinema" isi="Jurusan teknologi informasi - politeknik negeri malang"/> 
                })
            }   
            </div>

            
        )
    }
}

 export default BlogPost;