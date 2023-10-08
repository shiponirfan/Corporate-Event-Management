import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "/images/banner/banner3.jpg";
const Blog = () => {
    const breadCrumbs = (
        <>
          <li>{"Blog"}</li>
        </>
      );
    return (
        <div>
            <Breadcrumbs image={image}
        name={"Blog"}
        breadCrumbs={breadCrumbs}></Breadcrumbs>
        </div>
    );
};

export default Blog;