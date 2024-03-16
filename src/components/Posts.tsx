import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Posts = () => {
    const {data, status, error, isFetching} = useQuery({
        queryKey:["posts"],
        queryFn: async () => {
            const {data} = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return data;
        }
    })

  return (
    <div>
        <h1>ポスト一覧</h1>
        <div>
            {status === "pending" ? (
            <>読み込み中</>
            ) : (
                <>
                {data.map((post:any) => (
                    <p key={post.id}>
                        <a href="#">{post.title}</a>
                    </p>
                ))}
                </>
            )}
        </div>
    </div>
  )
}

export default Posts