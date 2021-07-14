const Search = () => {
  return (
    <div className="fastsole-search-item-wrap">
      <form>
        <select>
          <option value="all">All Brand</option>
          <option value="0">Cases &amp; Screen Protector</option>
          <option value="1">Power Banks</option>
          <option value="2">Speakers</option>
          <option value="3">TWS (True Wireless)</option>
          <option value="4">Gift Voucher</option>
          <option value="5">Headset</option>
          <option value="6">Charger &amp; Adapter</option>
          <option value="7">Wireless Charger</option>
          <option value="8">Car Accessories</option>
          <option value="9">Fitness &amp; Wearable</option>
        </select>
        <input type="search" name="search" placeholder="Search here..." />
        <input type="submit" value="Find Item" className="btn" />
      </form>
    </div>
  );
};

export default Search;
