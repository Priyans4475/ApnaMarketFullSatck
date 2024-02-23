import React,{Img} from 'react'

const Prodcard = (props) => {
  return (
    <div>
         <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                      <Img
                        className="h-[245px] md:h-auto object-cover w-[245px]"
                        src={`${props.img}`}
                        alt="placeholder"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                          size="txtPoppinsMedium24"
                        >
                          <>
                            {props.name}
                          </>
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtPoppinsMedium18Gray500"
                        >
                          {props.price}
                        </Text>
                      </div>
                    </div>
    </div>
  )
}

export default Prodcard