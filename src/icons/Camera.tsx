import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const CameraScan: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="path-2-inside-1" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.573 12.987C7.573 10.5089 9.5819 8.5 12.06 8.5C14.5381 8.5 16.547 10.5089 16.547 12.987C16.547 15.4651 14.5381 17.474 12.06 17.474C9.5819 17.474 7.573 15.4651 7.573 12.987ZM12.06 9.5C10.1342 9.5 8.573 11.0612 8.573 12.987C8.573 14.9128 10.1342 16.474 12.06 16.474C13.9858 16.474 15.547 14.9128 15.547 12.987C15.547 11.0612 13.9858 9.5 12.06 9.5ZM9.32585 4.5C9.14799 4.49995 8.98349 4.59438 8.89385 4.748L8.89379 4.74811L7.43179 7.25211C7.34216 7.40562 7.17776 7.5 7 7.5H5C4.17157 7.5 3.5 8.17157 3.5 9V18C3.5 18.8284 4.17157 19.5 5 19.5H19C19.8284 19.5 20.5 18.8284 20.5 18V9C20.5 8.17157 19.8284 7.5 19 7.5H17C16.8245 7.5 16.6619 7.40803 16.5715 7.25767L15.0589 4.7423C15.0589 4.74227 15.0588 4.74224 15.0588 4.7422C14.9682 4.59198 14.8054 4.5 14.63 4.5H9.326L9.32585 4.5ZM9.32603 3.5C9.32607 3.5 9.32611 3.5 9.32615 3.5L14.63 3.5C15.1565 3.5 15.6438 3.77598 15.9151 4.2257L15.9155 4.22633L17.2828 6.5H19C20.3807 6.5 21.5 7.61929 21.5 9V18C21.5 19.3807 20.3807 20.5 19 20.5H5C3.61929 20.5 2.5 19.3807 2.5 18V9C2.5 7.61929 3.61929 6.5 5 6.5H6.71295L8.03015 4.244C8.03017 4.24396 8.03019 4.24393 8.03021 4.24389C8.29913 3.78313 8.79254 3.49988 9.32603 3.5Z"/>
    </mask>
    <path d="M8.89385 4.748L8.03015 4.244L8.03014 4.24401L8.89385 4.748ZM9.32585 4.5L9.32625 3.5L9.32615 3.5L9.32585 4.5ZM8.89379 4.74811L9.75737 5.25232L9.7575 5.2521L8.89379 4.74811ZM7.43179 7.25211L8.29537 7.75632L8.29537 7.75632L7.43179 7.25211ZM16.5715 7.25767L17.4285 6.74233L17.4285 6.74233L16.5715 7.25767ZM15.0589 4.7423L14.1981 5.25138L14.2019 5.25764L15.0589 4.7423ZM15.0588 4.7422L15.9196 4.23312L15.915 4.22543L15.0588 4.7422ZM9.326 4.5L9.3256 5.5H9.326V4.5ZM9.32615 3.5V4.5V3.5ZM9.32603 3.5L9.32581 4.5H9.32603V3.5ZM14.63 3.5V2.5V3.5ZM15.9151 4.2257L15.0589 4.7423L15.0589 4.74237L15.9151 4.2257ZM15.9155 4.22633L16.7725 3.71098L16.7717 3.70966L15.9155 4.22633ZM17.2828 6.5L16.4258 7.01535C16.6066 7.31607 16.9319 7.5 17.2828 7.5V6.5ZM6.71295 6.5V7.5C7.06847 7.5 7.39726 7.31124 7.57653 7.00421L6.71295 6.5ZM8.03015 4.244L7.16808 3.7372L7.16657 3.73979L8.03015 4.244ZM8.03021 4.24389L8.89228 4.7507L8.89387 4.74796L8.03021 4.24389ZM12.06 7.5C9.02961 7.5 6.573 9.95661 6.573 12.987H8.573C8.573 11.0612 10.1342 9.5 12.06 9.5V7.5ZM17.547 12.987C17.547 9.95661 15.0904 7.5 12.06 7.5V9.5C13.9858 9.5 15.547 11.0612 15.547 12.987H17.547ZM12.06 18.474C15.0904 18.474 17.547 16.0174 17.547 12.987H15.547C15.547 14.9128 13.9858 16.474 12.06 16.474V18.474ZM6.573 12.987C6.573 16.0174 9.02961 18.474 12.06 18.474V16.474C10.1342 16.474 8.573 14.9128 8.573 12.987H6.573ZM9.573 12.987C9.573 11.6135 10.6865 10.5 12.06 10.5V8.5C9.5819 8.5 7.573 10.5089 7.573 12.987H9.573ZM12.06 15.474C10.6865 15.474 9.573 14.3605 9.573 12.987H7.573C7.573 15.4651 9.5819 17.474 12.06 17.474V15.474ZM14.547 12.987C14.547 14.3605 13.4335 15.474 12.06 15.474V17.474C14.5381 17.474 16.547 15.4651 16.547 12.987H14.547ZM12.06 10.5C13.4335 10.5 14.547 11.6135 14.547 12.987H16.547C16.547 10.5089 14.5381 8.5 12.06 8.5V10.5ZM9.75756 5.252C9.66791 5.40562 9.50341 5.50005 9.32556 5.5L9.32615 3.5C8.79257 3.49984 8.29907 3.78315 8.03015 4.244L9.75756 5.252ZM9.7575 5.2521L9.75756 5.25199L8.03014 4.24401L8.03008 4.24412L9.7575 5.2521ZM8.29537 7.75632L9.75737 5.25232L8.03021 4.24389L6.56821 6.74789L8.29537 7.75632ZM7 8.5C7.53329 8.5 8.02648 8.21686 8.29537 7.75632L6.56821 6.74789C6.65784 6.59438 6.82224 6.5 7 6.5V8.5ZM5 8.5H7V6.5H5V8.5ZM4.5 9C4.5 8.72386 4.72386 8.5 5 8.5V6.5C3.61929 6.5 2.5 7.61929 2.5 9H4.5ZM4.5 18V9H2.5V18H4.5ZM5 18.5C4.72386 18.5 4.5 18.2761 4.5 18H2.5C2.5 19.3807 3.61929 20.5 5 20.5V18.5ZM19 18.5H5V20.5H19V18.5ZM19.5 18C19.5 18.2761 19.2761 18.5 19 18.5V20.5C20.3807 20.5 21.5 19.3807 21.5 18H19.5ZM19.5 9V18H21.5V9H19.5ZM19 8.5C19.2761 8.5 19.5 8.72386 19.5 9H21.5C21.5 7.61929 20.3807 6.5 19 6.5V8.5ZM17 8.5H19V6.5H17V8.5ZM15.7145 7.77302C15.9858 8.2241 16.4736 8.5 17 8.5V6.5C17.1755 6.5 17.3381 6.59196 17.4285 6.74233L15.7145 7.77302ZM14.2019 5.25764L15.7145 7.77302L17.4285 6.74233L15.9159 4.22695L14.2019 5.25764ZM14.1981 5.25127C14.2001 5.25463 14.2017 5.25734 14.2027 5.25896C14.2032 5.25979 14.2036 5.26046 14.2039 5.26087C14.204 5.26108 14.2041 5.26124 14.2041 5.26135C14.2042 5.2614 14.2042 5.26144 14.2042 5.26147C14.2042 5.26148 14.2042 5.26149 14.2042 5.2615C14.2042 5.2615 14.2042 5.26151 14.2042 5.26151C14.2042 5.26151 14.2042 5.26151 14.2042 5.26151C14.2044 5.26173 14.2036 5.26047 14.2027 5.259C14.2018 5.2574 14.2001 5.25471 14.1982 5.25136L15.9196 4.23323C15.9176 4.22987 15.916 4.22716 15.915 4.22554C15.9145 4.22471 15.9141 4.22404 15.9139 4.22363C15.9137 4.22342 15.9136 4.22326 15.9136 4.22315C15.9135 4.2231 15.9135 4.22306 15.9135 4.22303C15.9135 4.22302 15.9135 4.22301 15.9135 4.223C15.9135 4.223 15.9135 4.223 15.9135 4.22299C15.9135 4.22299 15.9135 4.22299 15.9135 4.22299C15.9133 4.22277 15.9141 4.22403 15.915 4.2255C15.916 4.2271 15.9176 4.22979 15.9196 4.23314L14.1981 5.25127ZM14.63 5.5C14.4545 5.5 14.2928 5.40816 14.2027 5.25898L15.915 4.22543C15.6435 3.7758 15.1563 3.5 14.63 3.5V5.5ZM9.326 5.5H14.63V3.5H9.326V5.5ZM9.32545 5.5L9.3256 5.5L9.3264 3.5L9.32625 3.5L9.32545 5.5ZM9.32615 2.5H9.32603V4.5L9.32615 4.5V2.5ZM14.63 2.5H9.32615V4.5L14.63 4.5V2.5ZM16.7713 3.70911C16.3194 2.95996 15.5076 2.5 14.63 2.5V4.5C14.8055 4.5 14.9682 4.592 15.0589 4.7423L16.7713 3.70911ZM16.7717 3.70966L16.7713 3.70903L15.0589 4.74237L15.0593 4.743L16.7717 3.70966ZM18.1397 5.98465L16.7725 3.71098L15.0585 4.74167L16.4258 7.01535L18.1397 5.98465ZM19 5.5H17.2828V7.5H19V5.5ZM22.5 9C22.5 7.067 20.933 5.5 19 5.5V7.5C19.8284 7.5 20.5 8.17157 20.5 9H22.5ZM22.5 18V9H20.5V18H22.5ZM19 21.5C20.933 21.5 22.5 19.933 22.5 18H20.5C20.5 18.8284 19.8284 19.5 19 19.5V21.5ZM5 21.5H19V19.5H5V21.5ZM1.5 18C1.5 19.933 3.067 21.5 5 21.5V19.5C4.17157 19.5 3.5 18.8284 3.5 18H1.5ZM1.5 9V18H3.5V9H1.5ZM5 5.5C3.067 5.5 1.5 7.067 1.5 9H3.5C3.5 8.17157 4.17157 7.5 5 7.5V5.5ZM6.71295 5.5H5V7.5H6.71295V5.5ZM7.16657 3.73979L5.84937 5.99579L7.57653 7.00421L8.89373 4.74821L7.16657 3.73979ZM7.16815 3.73709L7.16808 3.7372L8.89221 4.7508L8.89227 4.75069L7.16815 3.73709ZM9.32625 2.5C8.4371 2.4998 7.61475 2.97189 7.16655 3.73982L8.89387 4.74796C8.98351 4.59438 9.14798 4.49996 9.32581 4.5L9.32625 2.5Z" fill="#3B3B3B" mask="url(#path-2-inside-1)"/>
  </StyledIcon>
)
