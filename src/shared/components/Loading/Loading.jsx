import { ThreeDots } from  'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#3f51b5" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loading;
