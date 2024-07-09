import React, { useState } from 'react'
import axios from 'axios';
import "./ImageGenerator.css";

function ImageGenerator() {

    const [newImage, setNewImgage] = useState(null);
    const [inputText, setInputText] = useState(null);

    const options = {
        method: 'POST',
        url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
        headers: {
            'x-rapidapi-key': '0037f16782msh6007c73e241be50p110899jsnaa948621a072',
            'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            inputs: inputText
        }
    };

    let GetImage = function () {
        try {
            async function GenImg() {
                // console.log("Function Called")
                const response = await axios.request(options);
                console.log(response.data);
                setNewImgage(response.data.url)
                // console.log("FUnction WOrking")

            }
            GenImg();

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>

            <div className='gen-img-sec'>
                <div>

                    <div  >
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Prompt</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Prompt here..." onChange={(event) => setInputText(event.target.value)}></textarea>

                    </div>
                    <div>

                        <button onClick={GetImage} type="button" class="my-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Generate</button>

                    </div>
                </div>
                <div className='image-generate'>

                    <img className="image-generate-img" src={newImage} />
                </div>
            </div>
        </>
    )
}

export default ImageGenerator;