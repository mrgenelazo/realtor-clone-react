import React, {useState} from 'react'

const CreateListing = () => {
  const [formData, setFormData] = useState({
      type: 'rent',
      name: '',
      bedrooms: 1,
      bathrooms: 1,
      parking: false,
      furnished: false,
      address: '',
      description: '',
      offer: false,
      regularPrice: 0,
      discountedPrice: 0
  });
  const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice} = formData;

  const onChange = () => {

  }
  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
      <form>
        <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex justify-between items-center'>
          <button type="button" id='type' value='sale' onClick={onChange}
            className={`
              mr-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >Sell</button>
          <button type="button" id='type' value='sale' onClick={onChange}
            className={`
              ml-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${type === 'sale' ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >Rent</button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Name</p>
        <input type="text" id="name" value={name} placeholder="Name" max-length="32" minLength="5" required onChange={onChange} className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:text-gray-700 focus:outline-none focus:border-slate-300 mb-6"/>
        <div className='flex space-x-6 mb-6'>
          <div>
            <p className='text-lg font-semibold'>Beds</p>
            <input type="number" id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-linear focus:text-gray-700 focus:border-slate-600  text-center'/>
          </div>
          <div>
            <p className='text-lg font-semibold'>Baths</p>
            <input type="number" id="bathrooms" value={bathrooms} onChange={onChange} min="1" max="50" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-linear focus:text-gray-700 focus:border-slate-600  text-center'/>
          </div>
        </div>
        <p className='text-lg mt-6 font-semibold'>Parking spot</p>
        <div className='flex justify-between items-center'>
          <button type="button" id='parking' value={true} onClick={onChange}
            className={`
              mr-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >Yes</button>
          <button type="button" id='parking' value={false} onClick={onChange}
            className={`
              ml-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >No</button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Furnished</p>
        <div className='flex justify-between items-center'>
          <button type="button" id='type' value={true} onClick={onChange}
            className={`
              mr-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >Yes</button>
          <button type="button" id='type' value={false} onClick={onChange}
            className={`
              ml-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${furnished ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >No</button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          placeholder="Address"
          required
          onChange={onChange}
          className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:bg-white focus:border-slate-600'
        >
        </textarea>
        <p className='text-lg mt-6 font-semibold'>Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          placeholder="Description"
          required
          onChange={onChange}
          className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:bg-white focus:border-slate-600 mb-6'
        ></textarea>
        <p className='text-lg font-semibold'>Offer</p>
        <div className='flex justify-between items-center mb-6'>
          <button type="button" id='offer' value={true} onClick={onChange}
            className={`
              mr-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full 
              ${!offer ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >Yes</button>
          <button type="button" id='offer' value={false} onClick={onChange}
            className={`
              ml-3 px-7 py-3 font-med text-sm uppercase shadow-md rounded hover:shadow-xl focus:shadow-lg
              transition duration-150 ease-linear w-full
              ${offer ? 'bg-white text-black' : 'bg-slate-600 text-white' } 
            `}
          >No</button>
        </div>
        <div className='flex items-center mb-6'>
          <div className=''>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='flex items-center justify-center space-x-6'>
            <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min="50" required className='
            w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:text-gray-700 focus:bg-white text-center
            '/>
            {type === "rent" && (
              <div className=''>
                <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
              </div>
            )}
            </div>

          </div>

        </div>
        {offer && (
          <div className='flex items-center mb-6'>
          <div className=''>
            <p className='text-lg font-semibold'>Discounted Price</p>
            <div className='flex items-center justify-center space-x-6'>
            <input type="number" id="discountedPrice" value={discountedPrice} onChange={onChange} min="50" required className='
            w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:text-gray-700 focus:bg-white text-center
            '/>
            {type === "rent" && (
              <div className=''>
                <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
              </div>
            )}
            </div>

          </div>

        </div>
        )}
        <div className='mb-6'>
              <p className='text-lg font-semibold'>Images</p>
              <p className='text-gray-600'>The first image will be the cover (max 6)</p>
              <input type="file" id="images" onChange={onChange} accept=".jpg, .png,.jpeg" multiple required 
              className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-linear focus:border-slate-600'
              />
        </div>
          <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-mdium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 transition duration-200 ease-linear '>Create Listing</button>
      </form>
    </main>
  )
}

export default CreateListing