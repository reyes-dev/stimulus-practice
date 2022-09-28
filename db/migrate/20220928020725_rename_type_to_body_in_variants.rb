class RenameTypeToBodyInVariants < ActiveRecord::Migration[7.0]
  def up
    rename_column :variants, :type, :body
  end

  def down
    rename_column :variants, :body, :type
  end
end
