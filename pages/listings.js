import { withRouter } from 'next/router';
import ItemListing from "../components/ItemListing";
import SearchBar from "../components/SearchBar";
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
    urlParams.set("sub_category_name", selectedOption);
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
    // Set the selectedOption state value to the value of the sub_category_name query parameter
    const { sub_category_name } = this.props.router.query;
    if (sub_category_name) {
      this.setState({ selectedOption: sub_category_name });
    }
  }
  
  render() {
    const { selectedOption, items } = this.state;
    return (
      <div className="text-center bg-gray-50 text-gray-800 py-16 px-6">
        <h1 className="text-5xl font-bold mt-0 mb-6">{selectedOption}</h1>
        <select value={selectedOption} onChange={this.handleChange}>
        <option value="Explore Produce" disabled>Filter by Category</option>
        <option value="All Produce">View All</option>
          <option value="Apple">Apple</option>
          <option value="Grapes">Grapes</option>
          <option value="Fruit">Fruit</option>
          <option value="Veggies">Veggies</option>
          <option value="Nuts">Nuts</option>
          <option value="Honey">Honey</option>
          <option value="Eggs">Eggs</option>
        </select>

        <SearchBar/>
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
  const { sub_category_name } = query;
  const items = await prisma.listing.findMany({
    where: {
      product_sub_category: {
        sub_category_name: sub_category_name,
      },
    },
    include: {
      listing_picture: true,
    },
  });
  return {
    props: { items: makeSerializable(items) },
  };
};

export default withRouter(Listings);
