import React, { Fragment, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Spiner from '../layout/Spiner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const {user, getUser, loading, getUserRepos, repos} = githubContext;
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    },[])
        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            login,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;
        if (loading)return <Spiner/>
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    back to search
                </Link>
                Hireable:{' '}
                {hireable ? (
                    <i className='fas fa-check text-success'/>
                ) : (
                    <i className='fas fa-times-circle text-danger'/>
                )
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img 
                        src={avatar_url}
                        className="round-img"
                        alt=""
                        style={{width: '150px'}}
                        />
                        <h1>{name}</h1>
                        <p>location: {location} </p>
                    </div>
                    <div>
                        {bio && (<Fragment>
                            <h3>bio</h3>
                            <p>{bio} </p>
                        </Fragment>
                        )}
                        <a href={html_url} className="btn btn_dark my-1">
                            Visit Github profile
                        </a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>User Name: </strong>{login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists }</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
}

export default User
