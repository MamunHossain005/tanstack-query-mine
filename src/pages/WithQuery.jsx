import { useQueries, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Network response was not ok')
    }

    return res.json();
}

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!res.ok){
        throw new Error('Network response was not ok');
    }

    return res.json();
}

const WithQuery = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: getPosts,
    //     staleTime: 10000
    // })

    // const {isPending: isUsersPending, error: usersError, data: users} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: getUsers,
    // })

    const [{ isPending, error, data }, { isPending: isUsersPending, error: usersError, data: users }] = useQueries({
        queries: [
            { queryKey: ['posts'], queryFn: getPosts },
            { queryKey: ['users'], queryFn: getUsers }
        ]
    })

    if (isPending) {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    if (error) {
        return <h1 className="text-3xl text-center my-8 font-bold text-red-500">Error: {error.message}</h1>
    }

    return (
        <div className='m-4 max-w-[600px] w-4/5 mx-auto'>
            <Link to={'/withoutQuery'}>
                <button className='btn btn-primary btn-outline'>Without Query</button>
            </Link>
            <h1 className='text-3xl text-center my-8 font-bold text-gray-400'>Posts Data</h1>
            {data && data.map(post => {
                return (
                    <Link to={`${post.id}`} key={post.id} className='p-4 rounded-lg block border border-gray-200 my-6 cursor-pointer hover:bg-gray-900'>
                        <h2 className='font-bold text-lg mb-2 text-gray-400'>{post.title}</h2>
                        <p className='text-gray-400'>{post.body}</p>
                    </Link>
                )
            })}
        </div>
    );
};

export default WithQuery;