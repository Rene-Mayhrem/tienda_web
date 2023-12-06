import React, { useEffect, useState } from "react";
import axios from "axios";
import CardArticle from "../../components/article/card/CardArticle";
import "./Home.css";

const Home = () => {
  const url = "http://localhost:8080/";
  const image_path =
    "/home/renecruz/Documents/university/classes/semestre-9/topicos_tecnologias_datos/tienda-project/tienda-front/src/img/";
  //! Categories object - API
  const [categories, setCategories] = useState([]);
  //? load categories
  useEffect(() => {
    loadCategories();
  }, []);
  //? API [GET] request -> http://localhost:8080
  const loadCategories = async () => {
    const result = await axios.get(`${url}categoria`);
    setCategories(result.data);
  };
  // ! Create dropdown filter - category
  const [categoryFilter, setCategoryFilter] = useState("");
  const handleCategoryChangeFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  // ! Articles object - API
  const [articles, setArticles] = useState([]);
  // ? load articles
  useEffect(() => {
    loadArticles();
  });
  // ? API [GET] request -> http://localhost:8080/articulo
  const loadArticles = async () => {
    const result = await axios.get(`${url}articulo`);
    setArticles(result.data);
  };
  return (
    <div>
      {/* filter section */}
      <select
        className="form-select"
        aria-label="Selecciona una categoria"
        name="category-filter"
        value={categoryFilter}
        onChange={handleCategoryChangeFilter}
      >
        <option value="">Selecciona categoria</option>
        {categories.map((category, key) => (
          <option key={key} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <div className="card-list">
        {articles.map((article, key) => (
          <div>
            <CardArticle key={key} article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
