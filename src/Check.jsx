import Comment from "./comment";


function Check() {

    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: ' The Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    };

    return (
        <div>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
        </div>
    )
}
export default Check;