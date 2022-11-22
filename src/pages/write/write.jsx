import "./write.css";

export default function Write(){
return(
    
     <div className="write">
        <form  className="writeForm">
            <div className="writeFormGroup">
                
                    <div className="writeInputs">
                        <div className="writeFile">
                    <label htmlFor="fileInput">
                <i class="writeIcon fas fa-plus"></i>
                    </label>
               <input type="file" id="fileInput"    />
               </div>
               <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
     </div>
);

}