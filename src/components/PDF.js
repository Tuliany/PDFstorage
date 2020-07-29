import React from 'react'



export const PDF = () => {


  const onChangeHandler = event=>{

    console.log(event.target.files[0])

}

  return (
    <div class="container">
	    <div class="row">
	      <div class="col-md-6">
	          <form method="post" action="#" id="#">
              <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file" name="file" onChange={onChangeHandler}/>
              </div>
              

          </form>
	  </div>
	   <div class="col-md-6">
	      <form method="post" action="#" id="#">
              <div class="form-group files color">
                <label>Upload Your File </label>
                {/* <input type="file" class="form-control" multiple=""/> */}
                <input type="file" name="file" onChange={onChangeHandler}/>
              </div>
          </form>
	  </div>
	</div>
</div>
  )
}