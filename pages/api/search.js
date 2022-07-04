import { search } from "../../api-calls/search";

const handleSearch = async (req, res) => {
    const response = await Promise.resolve(
        search({ query: req.query.search, locale: req.query.locale })
    );

    res.status(200).json({
        data: response.data
    });
};

export default handleSearch;
