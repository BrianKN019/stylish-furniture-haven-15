
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterTag {
  id: string;
  label: string;
  category: string;
}

interface InteractiveFilterProps {
  tags: FilterTag[];
  selectedTags: string[];
  onTagSelect: (tagId: string) => void;
  onTagRemove: (tagId: string) => void;
}

const InteractiveFilter: React.FC<InteractiveFilterProps> = ({
  tags,
  selectedTags,
  onTagSelect,
  onTagRemove,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {tags.map((tag) => (
        <motion.button
          key={tag.id}
          onClick={() => onTagSelect(tag.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${
              selectedTags.includes(tag.id)
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tag.label}
          {selectedTags.includes(tag.id) && (
            <X
              className="inline-block w-4 h-4 ml-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onTagRemove(tag.id);
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default InteractiveFilter;
