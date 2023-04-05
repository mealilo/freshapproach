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

    const categories = ['Fruit', 'Vegetables', 'Nuts', 'Eggs', 'Honey'];
    const sub_categories = ["Apples", "Asparagus", "Avocados", "Bananas", "Beets", "Blueberries", "Broccoli", "Brussel Sprouts", "Cantaloupes", "Carrots", "Cauliflower", "Celery", "Cherries", "Corn", "Cucumbers", "Eggplant", "Garlic", "Grapefruits", "Grapes", "Green Beans", "Honeydews", "Kale", "Kiwis", "Lemons", "Lettuce", "Mangoes", "Onions", "Oranges", "Other", "Other Fruit", "Other Vegetable", "Papayas", "Peaches", "Pears", "Peas", "Peppers", "Pineapples", "Plums", "Potatoes", "Radishes", "Raspberries", "Spinach", "Squash", "Strawberries", "Tomatoes", "Watermelons", "Zucchini"];

    // if a category is selected
    if (categories.includes(selectedOption)) {
      urlParams.set("category_name", selectedOption);
      urlParams.delete("sub_category_name");
      urlParams.delete("zip");
    }
    // if only zip is selected 
     else if (/^\d{5}$/.test(selectedOption)) {
      urlParams.set("zip", selectedOption);
      urlParams.delete("category_name");
      urlParams.delete("sub_category_name");
    } else if (sub_categories.includes(selectedOption))  {
      urlParams.set("sub_category_name", selectedOption);
      urlParams.delete("category_name");
      urlParams.delete("zip");
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
    const { sub_category_name, category_name, zip } = this.props.router.query;
    if (sub_category_name) {
      this.setState({ selectedOption: sub_category_name });
    }
    else if (category_name) {
      this.setState({ selectedOption: category_name });
    }
    if (sub_category_name) {
      this.setState({ selectedOption: sub_category_name });
    }
    else if (zip) {
      this.setState({ selectedOption: 'Items Near: ' + zip });
    }
  }


//this function is called until a length of 5 is reached
 handleSearchZip = (event) => {
  let value = event.target.value;
  if (value.length === 5) {
    this.handleChange(event);
  }
}

  render() {
    const { selectedOption, items } = this.state;
    let categories = ['Fruit', 'Vegetables', 'Nuts', 'Eggs', 'Honey'];
    let sub_categories = ["Apples", "Asparagus", "Avocados", "Bananas", "Beets", "Blueberries", "Broccoli", "Brussel Sprouts", "Cantaloupes", "Carrots", "Cauliflower", "Celery", "Cherries", "Corn", "Cucumbers", "Eggplant", "Garlic", "Grapefruits", "Grapes", "Green Beans", "Honeydews", "Kale", "Kiwis", "Lemons", "Lettuce", "Mangoes", "Onions", "Oranges", "Other", "Other Fruit", "Other Vegetable", "Papayas", "Peaches", "Pears", "Peas", "Peppers", "Pineapples", "Plums", "Potatoes", "Radishes", "Raspberries", "Spinach", "Squash", "Strawberries", "Tomatoes", "Watermelons", "Zucchini"];  
    return (
      <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
        
        <h1 className="text-5xl font-bold mt-0 mb-6">{selectedOption}</h1>

        <div className=" flex justify-center items-center">
          <select className=' w-40 text-center h-15 bg-green-100 text-black text-sm rounded-lg shadow-lg p-2.5' value={selectedOption} onChange={this.handleChange}>
              <option value="Explore Produce" disabled>Filter by Category</option>
              <option value="All Produce">View All</option>
              {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
                {sub_categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
        </select>

<p className='m-10'>OR</p>
  
          {/* Search Bar  */}
                      <input title="If no results are found, you will, all listings will be shown."onChange={this.handleSearchZip} maxLength="5"  type="number" id="zip-search" placeholder='Enter a Zip Code Near You' className="w-60 text-black text-center h-15 bg-green-100 text-black text-sm rounded-lg shadow-lg p-2.5"  required>
                      </input>
                      {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zip</button> */}



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
    const { sub_category_name, category_name, zip } = query;
    console.log(sub_category_name, category_name, zip);
  
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
          radius: '10',
          country: 'us',
          unit: 'miles',
        }
      });
      let obj = response.data.results;
      //map over the array and return the code property to add to an array


      // convert the received object
      try {
        let codes = obj.map(item => item.code);
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
      // if any problem with listing above, send back all listings with their picture
      catch{
        items = await prisma.listing.findMany({
          include: {
            listing_picture: true,
          },
        });
      }



      // get producers who have a zip code in the search area

  }
    


      // get all listings attached to the producerID's that are in the zip codes that we want

    return {
      props: { items: makeSerializable(items) },
    };
  };
  
  
export default withRouter(Listings);







