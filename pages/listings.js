import { withRouter } from 'next/router';
import ItemListing from "../components/ItemListing";
import axios from 'axios';
import { makeSerializable } from "../lib/util";
import prisma from "../lib/prisma";
import Link from "next/link";
import { Component } from "react";
class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Discover New Produce", // set default selected option
      items: props.items || [], // set initial items state value to props or empty array
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(event) {
    const selectedOption = event.target.value;
    this.setState({ selectedOption });
    // Update the URL query parameter with the selected option
    const urlParams = new URLSearchParams(this.props.router.query);

    if(selectedOption === 'Fruit' || selectedOption === 'Vegetables' || selectedOption === 'Nuts' || selectedOption === 'Eggs' || selectedOption === 'Honey'){
      urlParams.set("category_name", selectedOption);
      urlParams.delete("sub_category_name");
    } else {
      urlParams.set("sub_category_name", selectedOption);
      urlParams.delete("category_name");
    }
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    // Reload the page with the updated query parameter
    if (selectedOption === "All Produce") {
        window.location.href = window.location.pathname;
      } else {
        window.location.reload();
      }
  }

  componentDidMount() {
    // Set the selectedOption state value to the value of the sub_category_name or category_name query parameter
    const { sub_category_name, category_name } = this.props.router.query;
    if (sub_category_name) {
      this.setState({ selectedOption: sub_category_name });
    }
    else if (category_name) {
      this.setState({ selectedOption: category_name });
    }
  }



  // call api with zip code
 fetchData = async (zip) => {
  //call api with passed in paramaters
  let response = await axios.get('https://app.zipcodebase.com/api/v1/radius', {
    params: {
      apikey: '8e627b60-cd03-11ed-9cbc-a586dd8a1425',
      code: zip,
      radius: '25',
      country: 'us',
      unit: 'miles',
    }
  });
  let obj = response.data.results;
  //map over the array and return the code property to add to an array
  let codes = obj.map(item => item.code);
  alert(codes);
  // call handleSearchZip with the array of zip codes to query prisma
  await handleSearchZip(codes);
}
// call api with zip code for testing
 fetchDataTest = async () => {

  let codes = ['84601', '84606', '84604', '84603', '84058', '84097', '84057', '84663', '84042', '84059', '84605', '84664', '84660', '84602', '84062', '84003', '84651', '84082', '84045', '84043'];;
  // call handleSearchZip with the array of zip codes to query prisma
  let items = await handleSearchZip(codes);
  alert(items);

}

//this function is called until a length of 5 is reached
 handleSearchZip = (event) => {
  let value = event.target.value;
  if (value.length === 5) {
  alert(`You are searching for ${value}`);

  //rename variable
  let zip = value;
  
  //comment out to save requests
  //this.fetchData(zip);
  this.fetchDataTest();

  }

}

  render() {
    const { selectedOption, items } = this.state;
    return (
      <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
        
        <h1 className="text-5xl font-bold mt-0 mb-6">{selectedOption}</h1>

        <div className="content-center">

        
        <select value={selectedOption} onChange={this.handleChange}>
          <option value="Explore Produce" disabled>Filter by Category</option>
          <option value="All Produce">View All</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Nuts">Nuts</option>
            <option value="Eggs">Eggs</option>
            <option value="Honey">Honey</option>
            <option value="Apples">Apples</option>
            <option value="Asparagus">Asparagus</option>
            <option value="Avocados">Avocados</option>
            <option value="Bananas">Bananas</option>
            <option value="Beets">Beets</option>
            <option value="Blueberries">Blueberries</option>
            <option value="Broccoli">Broccoli</option>
            <option value="Brussel Sprouts">Brussel Sprouts</option>
            <option value="Cantaloupes">Cantaloupes</option>
            <option value="Carrots">Carrots</option>
            <option value="Cauliflower">Cauliflower</option>
            <option value="Celery">Celery</option>
            <option value="Cherries">Cherries</option>
            <option value="Corn">Corn</option>
            <option value="Cucumbers">Cucumbers</option>
            <option value="Eggplant">Eggplant</option>
            <option value="Garlic">Garlic</option>
            <option value="Grapefruits">Grapefruits</option>
            <option value="Grapes">Grapes</option>
            <option value="Green Beans">Green Beans</option>
            <option value="Honeydews">Honeydews</option>
            <option value="Kale">Kale</option>
            <option value="Kiwis">Kiwis</option>
            <option value="Lemons">Lemons</option>
            <option value="Lettuce">Lettuce</option>
            <option value="Mangoes">Mangoes</option>
            <option value="Onions">Onions</option>
            <option value="Oranges">Oranges</option>
            <option value="Other">Other</option>
            <option value="Other Fruit">Other Fruit</option>
            <option value="Other Vegetable">Other Vegetable</option>
            <option value="Papayas">Papayas</option>
            <option value="Peaches">Peaches</option>
            <option value="Pears">Pears</option>
            <option value="Peas">Peas</option>
            <option value="Peppers">Peppers</option>
            <option value="Pineapples">Pineapples</option>
            <option value="Plums">Plums</option>
            <option value="Potatoes">Potatoes</option>
            <option value="Radishes">Radishes</option>
            <option value="Raspberries">Raspberries</option>
            <option value="Spinach">Spinach</option>
            <option value="Squash">Squash</option>
            <option value="Strawberries">Strawberries</option>
            <option value="Tomatoes">Tomatoes</option>
            <option value="Watermelons">Watermelons</option>
            <option value="Zucchini">Zucchini</option>
        </select>

        {/* Search Bar  */}
        <div className="flex items-center">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black-900 sr-only dark:text-white">Search</label>
          <div className="relative w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeLinejoin="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={this.handleSearchZip}   type="number" id="default-search" placeholder='ZipCode Near Me (5 Numbers)' className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-orange-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              </input>
              {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zip</button> */}
          </div>     
        </div>



        </div>
        <div className="flex justify-center flex-wrap">
          {items.map((item) => (
            <Link href={`/listing?id=${item.listing_ID}`} key={item.listing_ID}>
              <ItemListing listing={item} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export const getServerSideProps = async ({ query }) => {
    const { sub_category_name, category_name } = query;
    console.log(sub_category_name, category_name);
  
    let whereClause = {};
    let items = {};
    if (sub_category_name) {
      whereClause = {
        product_sub_category: {
          sub_category_name: sub_category_name,
        },
      };
    } else if (category_name) {
      whereClause = {
        product_category: {
          category_name: category_name,
        },
      };
    }
  
   // define zip for testin here
 zip = 84604;
 if(!zip){
      // if just a filter on  cateogry/sub category
    items = await prisma.listing.findMany({
      where: whereClause,
      include: {
        listing_picture: true,
      },
    });
 }


  else if (zip){

          //call api with passed in paramaters
      let response = await axios.get('https://app.zipcodebase.com/api/v1/radius', {
        params: {
          apikey: '8e627b60-cd03-11ed-9cbc-a586dd8a1425',
          code: zip,
          radius: '25',
          country: 'us',
          unit: 'miles',
        }
      });
      let obj = response.data.results;
      //map over the array and return the code property to add to an array
      let codes = obj.map(item => item.code);


      // get producers who have a zip code in the search area
      let all_producers = await prisma.producer.findMany({
        where: {
            OR: codes.map((code) => ({ zip_code: code })),
        },
        include: {
          listing: {
            include: {
              listing_picture: true,
            },
          },
        },
      })

      // filter out producers with more than one listing
        let producers = all_producers.filter((producer) => producer.listing.length >= 1);

      // extract producer ID from producers who are in the zip area we want
        const producerIDs = producers.map(producer => producer.producer_ID);
            // get producers who have a zip code in the search area
      // if just a filter on  cateogry/sub category
       items = await prisma.listing.findMany({
        where: {
          OR: producerIDs.map((producer) => ({ producer_ID: producer })),
      },
        include: {
          listing_picture: true,
        },
      });
  }
    


      // get all listings attached to the producerID's that are in the zip codes that we want

    return {
      props: { items: makeSerializable(items) },
    };
  };
  
  
export default withRouter(Listings);







