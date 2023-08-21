# Reservation Management App

## Description
This project is a Reservation Management App that allows users to view, edit, and update reservations associated invoice addresses. It is built using React Native and leverages various technologies to provide a seamless user experience.

## Assumptions Made
1. The app is designed for demonstration and educational purposes, focusing on functionality rather than production-ready code.
2. Spent minimal time, extensive testing, detailed validations for billing and UI polishing have not been prioritized.
3. The project assumes a working API backend with specific endpoints, and the app interfaces with this API to manage reservations.
4. The project encompasses two distinct screens. The initial screen presents a comprehensive list of reservations, while selecting any reservation promptly navigates to the "Update Billing" screen. On the "Update Billing" screen, the application initiates a direct fetch of reservation details via the associated API call. This prepopulates the form, offering an effortless means to make updates. To optimize user interaction, the reservation details screen includes a dedicated "Edit" button within the billing section. By selecting this button, users seamlessly transition to the "Update Billing" screen, ensuring a seamless and intuitive user experience.

## Implementation Overview
The app is implemented using React Native, React Navigation, React Query for data fetching, and Axios for making API requests. It follows a modular structure, with components and hooks organized to ensure code reusability.

Despite the simplicity of the task, I've taken a deliberate approach to structure the API calls using best practices. This choice was made to showcase my skills and expertise in building applications that are scalable, maintainable, and organized. I've constructed the API structure with scalability in mind. This approach lays the groundwork for expanding the application's functionality without compromising on code quality, maintainability, or performance. Assuming that this was the only part of the app which was important for the evaluation of this task i.e communication of the network and data mapping to the components, I've taken this approach. 

## How to Use
1. Clone the repository to your local machine. Assuming that you have react native CLI configured mentioned here. https://reactnative.dev/docs/environment-setup, follow the next steps to run the project.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Run the app using `yarn ios` or `yarn android` to run on iOS or android respectively.
Note. For ios don't forget to install pods first, using `cd ios && pod install && cd ..` in terminal of the project directory.

## Code Structure
The project is structured as follows:
- `components`: Reusable UI components.
- `navigation`: Navigation logic and routes.
- `screens`: Screen components representing different app views.
- `api`: Files for interacting with the API, including data types and service methods.
- `react-query-hooks`: Hooks created using react query to call the APIs inside the components.
- `utils`: Utility functions, such as date formatting.

## Design Decisions
- **React Query**: Used for data fetching and caching, improving the app's performance by reducing unnecessary API calls, providing and clean approach to connect components with APIs without writing our own custom hooks.
- **Modular Components**: Components are designed to be modular and reusable, promoting maintainability and code organization.
- **Axios**: Utilized for making API requests due to its simplicity and support for request customization.

## Known Limitations
- Limited Testing: Automated tests have not been included in this implementation.
- Minimal Styling: The focus was on functionality rather than UI aesthetics.
- Simplified Loading and Error Handling: Loading and Error handling has been kept minimal for the sake of brevity.

## Future Improvements
- **Testing**: Implement thorough unit and integration testing to ensure stability.
- **Styling**: Enhance the user interface with improved styling and responsive design.
- **Localization**: Add support for different languages and locales.
- **react-native-config**: The setup of the environment should be orchestrated through React Native Config, a valuable tool that facilitates the configuration of distinct environments to ensure robust support for varying deployment contexts. Also secrets should never be part of repo directly and store at a secure platform e.g.1password.

Have a look at this example repo for clean project structure details:
https://github.com/alihussnain-git/gallery-app


## Conclusion
This Reservation Management App showcases key functionalities such as data fetching, updating, and navigation. While not production-ready, it serves as a foundation for further development and improvements.
