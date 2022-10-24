import React, { useState } from 'react'
import "./Content.style.css";

const desctiptionText = " What is Lorem Ipsum? \n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \n Why do we use it? \n It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). \n Where does it come from? \n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. \n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. \n " ;

const formdata={
  title:"Title",
  description:desctiptionText
}



function Content() {

  const [ formState, setFormState ] = useState( formdata );
  const [hideOrShowForm, sethideOrShowForm] = useState(false);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
}

const HideOrShowForm=()=>{
 // setFormState({  ...formState, title:'Title', description:desctiptionText})
  sethideOrShowForm(!hideOrShowForm);
  
}

  return (
    <div className="container">
      {hideOrShowForm &&
      <div className="card editor">
        <div className="form-group">
          <label>Title</label>
          <input type="text" name='title' value={formState.title} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows={7} name='description' value={formState.description}onChange={onInputChange} />
        </div>

      </div>
      }
      <div className="card content">
        <button onClick={HideOrShowForm}>{!hideOrShowForm ?'Show Text Editor':'Hide Text Editor' } </button>
        <h3>{formState.title }</h3>
        <p>
              { formState.description }
        </p>
      </div>
    </div>
  )
}

export default Content