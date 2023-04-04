import { withRouter } from 'next/router';
import ItemListing from "../components/ItemListing";
import SearchBar from "../components/ZipSearch";
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

        <SearchBar/>


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
  
    const items = await prisma.listing.findMany({
      where: whereClause,
      include: {
        listing_picture: true,
      },
    });
  
    return {
      props: { items: makeSerializable(items) },
    };
  };
  
  
export default withRouter(Listings);







