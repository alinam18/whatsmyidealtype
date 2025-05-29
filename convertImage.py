import os

# Path to your folder
folder_path = "/Users/alinamarin/Desktop/ProjectPhotos"

# List all files in the folder
files = os.listdir(folder_path)

# Filter only image files (optional - e.g., .jpg, .png)
image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

# Loop and rename each image
for index, filename in enumerate(image_files, start=1):
    ext = os.path.splitext(filename)[1]  # Keep original file extension
    new_name = f"image_{index}{ext}"
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} → {new_name}")
