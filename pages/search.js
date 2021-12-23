import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Search = () => {

    const [pickuplocation, setPickuplocation] = useState('')
    const [dropofflocation, setDropofflocation] = useState('')

    const [choiceofpickuplocation, setChoiceofpickuplocation] = useState([])

    // const getPickupLocation=()=>{
    //     const location = pickuplocation;

    //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
    //     new URLSearchParams({
    //         access_token:"pk.eyJ1IjoidGFvdXlha2l6IiwiYSI6ImNrd2M5bDFleTA5NGIybm4xZ2IwdmV0bTgifQ.z2SR41j5jR6y0e1-k26VFg",
    //         limit:5
    //     })
    //     )
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log("data features",  data.features)
    //         // console.log("hffy", data.features[0].place_name)
    //         // data.features.map(d =>())
    //         // setChoiceofpickuplocation(data.features[0])
    //         // console.log("hy", choiceofpickuplocation)
    //     })
    // }

    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    // // Update the document title using the browser API
    //     getPickupLocation();
    // });


    return (
        <Wrapper>
            <Link href='/'>
                <ButtonContainer>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </ButtonContainer>
            </Link>
            <InputContainer>
                <FromToIcons>
                    <CircleIcon src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <SquareIcon src='htt ps://img.icons8.com/windows/50/000000/square-full.png' />
                </FromToIcons>   
                <InputBoxes>
                    <Input placeholder='Enter pickup location' onChange={event => setPickuplocation(event.target.value)} />
                    <Input placeholder='Where to?' onChange={event => setDropofflocation(event.target.value)} />
                </InputBoxes>
                <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' /> 
            </InputContainer>
            <SavedPlaces>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png'/>
                 Saved Places    
            </SavedPlaces>
            <Link href={{ pathname: '/confirm', query: {pickuplocation: pickuplocation, dropofflocation: dropofflocation} }} >  
                <ConfirmButtonContainer>
                    Confirm Locations
                </ConfirmButtonContainer>
            </Link>
        </Wrapper>

    )
}

export default Search

const Wrapper = tw.div`
 bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
flex flex-col w-10 mr-2 items-center
`

const BackButton = tw.img`
h-12 cursor-pointer
`

const CircleIcon = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const SquareIcon = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3
`

const StarIcon = tw.img`
rounded-full bg-gray-400 p-2 mr-2 h-10 w-10 
`

const SavedPlaces = tw.div`
bg-white flex text-l  items-center px-4 py-2
`

const ConfirmButtonContainer = tw.div`
bg-black flex text-xl  items-center py-2 text-white mt-4 justify-center text-center m-12 transform hover:scale-105 transition cursor-pointer
`