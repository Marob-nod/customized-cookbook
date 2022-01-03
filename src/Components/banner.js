import Link from "./link";

const Banner = () => (
    <div className='banner_container'>
        <h1 className="banner_container-title">
            Greene & Marien Family Cookbook
        </h1>
        <p className="banner_container-description">
            When French and American culinar traditions meet ! Welcome to our family cookbook with all the recipes you like ! From de 'Gravy' to the 'Galette de pommes de terre', you will find all you are craving for !
        </p>
        <a href="/recipes" className="banner_container_button-link ">
            <Link name="Explore the recipes" />
        </a>

    </div>
);

export default Banner;