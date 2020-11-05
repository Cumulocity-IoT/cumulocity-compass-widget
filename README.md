# Cumulocity IoT Compass widget
This is a runtime installable widget which can be added to your tenant using the [Application Builder](https://github.com/SoftwareAG/cumulocity-app-builder) (developed by Software AG Global Presales).


![Compasswidget](compass-widget.png)


## Deploying the widget
To deploy the widget to your Cumulocity tenant

1. Download the latest version of this widget
2. Log into your Cumulocity tenant
3. If you do not have application builder installed, please follow the steps shown [here](https://github.com/SoftwareAG/cumulocity-app-builder)
4. If you have not yet created your application using the application Builder, please click on 'Application builder' and then click on 'Add application'
6. In your application, click on the 'More...' link on the right side of the screen
7. Click on 'Install widget'
8. Click on 'Choose File' and select the "compass-widget.zip" which you have downloaded
9.   Click on the 'Upload' button to add the widget to you tenant

## Adding the widget to your dashboard
1. To add the widget to your dashboard, click on your application and select the 'Add Widget' link at the top of the screen
2. Scroll down and select the 'Compass' widget
3. See the next section for widget configuration details
 

## Configuring the Widget through your Cumulocity tenant
1. In the 'Compass' widget:
    3a. Enter the "Measurement Fragment"
    3b. Enter the "Measurement Series"

The compass widget will refresh each time a new value is sent to the configured measurement for the device.

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](http://tech.forums.softwareag.com/techjforum/forums/list.page?product=cumulocity).

You can find additional information in the [Software AG TECHcommunity](http://techcommunity.softwareag.com/home/-/product/name/cumulocity).


