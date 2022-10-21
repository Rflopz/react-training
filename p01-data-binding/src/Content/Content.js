import React from 'react'
import "./Content.style.css";
import { useState } from 'react';


const initialDataState = {
  title: "Original Tittle",
  description: "What is Lorem Ipsum " +
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. " +
    "Why do we use it? " +
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). " +
    "Where does it come from? " +
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. " +
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
}


function Content() {

  const [data, setData] = useState(initialDataState)
  const [allowUpdatContext, setAllowUpdatContext] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((current) => ({
      ...current, ...{ [name]: value }
    }))
  }

  const handleUpdateContext = (e) => {
    setAllowUpdatContext(e.target.checked)
  }

  const selectAll =(e)=>{
    e.target.select()
  }


  return (
    <div className="container">
      <div className="card editor">
        <div className="form-group">
          <label>Title</label>
          <input type="text"
            name='title'
            value={data['title']}
            onFocus={selectAll}
            onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>
            <input name='allowUpdateContext' type="checkbox" 
                   checked={allowUpdatContext}
                   onChange={handleUpdateContext} />
            Allow to edit description
          </label>

        </div>

        {(allowUpdatContext &&
          <div className="form-group">
            <label>Description</label>
            <textarea rows={7}
              name='description'
              value={data['description']}
              onFocus={selectAll}
              onChange={handleChange} />
          </div>
        )}


      </div>

      <div className="card content">
        <h3>{data.title}</h3>
        <p> {data.description}</p>
      </div>

    </div>
  )
}

export default Content

/*  
****************************************************************************************
Notes for me:
For individual event processes like change or click, you could apply this solution

  const handleTitleChange = (e) =>{
    setData((current) => ({
      ...current, ...{['title']:e.target.value}
    }))
  }
  const handleDescriptionChange =(e)=>{
    setData((current) => ({
      ...current, ...{['description']:e.target.value}
    }))
  }

*/