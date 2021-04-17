import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/MyLayout';
import Grid from '../components/Projects/Grid';
import ProjectCard from '../components/Projects/ProjectCard';

interface Contributor {
    avatar_url?: string,
    contributions?: number,
    events_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    gravatar_id?: string,
    html_url?: string,
    id?: number,
    login?: string,
    node_id?: string,
    organizations_url?: string,
    received_events_url?: string,
    repos_url?: string,
    site_admin?: false
    starred_url?: string,
    subscriptions_url?: string,
    type?: string,
    url?: string
}

const axiosGet = async(url: string) =>{
    const { data } = await axios.get(url);
    return data;
}

const Projects = ()=>{

    const [ repos, setRepos ] = useState<string[]>();
    const [ contributors, setContributors] = useState<Contributor[][] | null>();

    useEffect(()=>{
        // [x] Get all public repos:    https://api.github.com/users/GrammerhubTeam/repos
        // Will Use: name, description, html_url, created_at
        // Get languages for repo from https://api.github.com/repos/GrammerhubTeam/2020-hackathon/languages
        // [x] Get all contributors for each repo:      https://api.github.com/repos/GrammerhubTeam/2020-hackathon-strapi/contributors
            // Will use: login (GitHub handle), avatar_url (to include avatar thumbnail), contributions (in addition to commits?)
            //              & html_url (links to users profile on GitHub)
            //===Contributions are: -commits to a project's default branch or the gh-pages branch
            //                      -open an issue
            //                      -open a Pull Request
            
            // [x] Get all commits listed for each repo:    https://api.github.com/repos/GrammerhubTeam/2020-hackathon/commits
                    // Sort by contributor
                    // Will use: to count commits, option to view specific commits? (or a link to link to all commits in this repo by this user?)

        const asynchronousActions = async (): Promise<void>=>{
            //Get all public GrammerhubTeam Repos
            const reposResponse = await axiosGet(`https://api.github.com/users/GrammerhubTeam/repos`);
            console.log('Repos: ', reposResponse);
            //Store array of Repo Names
            const repositories = reposResponse.map(el=> el.name);
            console.log(repositories);
            setRepos(repositories)

            // Get all contributors for each public repo
            const getContributors = (): Promise<Contributor[][]>=>{
                return Promise.all(repositories.map(async (el, i): Promise<Contributor[]> => await axiosGet(`https://api.github.com/repos/GrammerhubTeam/${repositories[i]}/contributors`) ))
            }
            getContributors().then((data: Contributor[][])=>{
                console.log(data);
                setContributors([...data])
            })
            //Need a commits response interface
            const getCommits = ()=>{
                return Promise.all(repositories.map(async (el, i)=> await axiosGet(`https://api.github.com/repos/GrammerhubTeam/${repositories[i]}/commits`) ))
            }
            getCommits().then(data=>{
                console.log(data);
            })
        };

        asynchronousActions();
    }, [])

    return (
        <Layout>
            <h1>Projects</h1>
            <Grid />
            {repos && repos.map(cur=> <ProjectCard name={cur}/>)}
        </Layout>
    )
}

export default Projects;