import Content from "./Content";

const ListPage = (props) => {
  const results = props.searchResults.map((content) => (
    <Content key={content.id} content={content.attributes} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <arcticle>No Matching Contents</arcticle>
  );

  return <main style={{ margin: "0 1rem 0 1rem" }}>{content}</main>;
};

export default ListPage;
