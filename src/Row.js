const Row=({repo})=>{
    return(
        <>
      <section className="row">
                <div className="repo-image">
                <img src={repo.owner.avatar_url} alt=""></img>
                </div>
                <div className="repocont">
                <div className="header">
                <div className="reponame">
                    {repo.name}
                </div>
                <div className="repodescription">
                    {repo.description}
                </div>
                </div>
                <div className="header2">
                <div className="repostar">
                  {repo.stargazers_count}
                </div>
                <div className="repoissues">
                  {repo.open_issues_count}
                </div>
                <div className="repopush">
                 <h5>Last pushed {repo.pushed_at} by {repo.owner.login}</h5> 
                </div>
                </div>
                </div>
              
      </section>
        </>
    )
}
export default Row;