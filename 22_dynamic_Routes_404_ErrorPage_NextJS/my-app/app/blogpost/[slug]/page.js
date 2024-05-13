export default function Page({ params }) {
    let languages = ["python", "javascript", "java", "CSS", "Tailwind"]

    if(languages.includes((params.slug).toLowerCase())) {
        return <div>My Post: {params.slug}</div>
    } else {
        return <div>Post not found!</div>
    }
}