import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import app from '../../firebase'
import "./newProduct.css";
import { addProducts } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

export default function NewProduct() {

  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([])

  const dispatch = useDispatch()

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]:e.target.value })
  }

  const handleCat = e => {
    setCat(e.target.value.split(','))
  }

  const handleClick = e => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      }, 
      (error) => {
        console.log(error)
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories:cat };
          addProducts(product, dispatch)
        });
      }
    );
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Title" name='title' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="Price" name='price' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description" name='desc' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Categories" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name='inStock' onChange={handleChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}